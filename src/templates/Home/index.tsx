import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../components/Button'
import { Container } from '../../components/Container'
import { Modal } from '../../components/Modal'
import Pagination from '../../components/Pagination'
import client from '../../graphql/client'
import SUBSCRIBE from '../../graphql/mutations/subscribe'
import GET_JOB from '../../graphql/queries/getJob'
import GET_JOBS from '../../graphql/queries/getJobs'
import * as S from './styles'

type Jobs = {
  title?: string
  slug?: string
  commitment?: {
    title?: string
  }
  company?: {
    name?: string
    slug?: string
  }
  locationNames?: string
  onClick?: () => string
}

type Job = {
  title: string
  commitment: {
    title: string
  }
  company: {
    name: string
  }
  locationNames?: string
  description: string
}

export default function Home({ title = 'Jobs' }: Pick<Jobs, 'title'>) {
  const [jobs, setJobs] = useState([])
  const [job, setJob] = useState<Job>()
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage] = useState(10)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getJobs = async () => {
      const { jobs } = await client.request(GET_JOBS)

      setJobs(jobs)
      setLoading(false)
    }

    getJobs()
  }, [])

  const getJob = async (
    companySlug: string | undefined,
    jobSlug: string | undefined
  ) => {
    setLoading(true)
    const { job } = await client.request(GET_JOB, {
      companySlug: companySlug,
      jobSlug: jobSlug
    })

    setJob(job)
    setLoading(false)
  }

  if (loading) {
    return (
      <S.Loading>
        <span> Carregando...</span>
      </S.Loading>
    )
  }

  const lastJob = currentPage * perPage
  const firstJob = lastJob - perPage
  const currentJobs = jobs.slice(firstJob, lastJob)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const modal = (companySlug: string | undefined, slug: string | undefined) => {
    getJob(companySlug, slug)
    setModalIsOpen(!modalIsOpen)
  }

  const user = {
    name: 'Cristiano',
    email: 'cristianomorgante@hotmail.com'
  }

  const handleApplication = async (job: string | undefined) => {
    try {
      await client
        .request(SUBSCRIBE, user)
        .then((data) =>
          toast.success(
            `Olá ${data.subscribe?.name}! Obrigado por se candidatar para ${job} `
          )
        )
      setModalIsOpen(!modalIsOpen)
    } catch (error) {
      toast.error(`Não foi possível candidatar.`)
      process.exit(1)
    }
  }

  return (
    <Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>

        {currentJobs.map((job: Jobs, key) => (
          <S.JobItem
            key={key}
            onClick={() => modal(job.company?.slug, job.slug)}
            role="button"
          >
            <S.JobTitle>{job.title}</S.JobTitle>
            <S.Commitment>{job.commitment?.title}</S.Commitment>

            <S.Company>
              Company: <span>{job.company?.name}</span>
            </S.Company>
            {job.locationNames && (
              <S.Location>
                Location: <span>{job.locationNames}</span>
              </S.Location>
            )}
          </S.JobItem>
        ))}

        <Modal
          title="Candidatura"
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        >
          <>
            <S.JobItem>
              <S.JobTitle>{job?.title}</S.JobTitle>
              <S.Commitment>{job?.commitment?.title}</S.Commitment>

              <S.Company>
                Company: <span>{job?.company?.name}</span>
              </S.Company>
              {job?.locationNames && (
                <S.Location>
                  Location: <span>{job?.locationNames}</span>
                </S.Location>
              )}
              <S.Description>{job?.description}</S.Description>
            </S.JobItem>
            <Button onClick={() => handleApplication(job?.title)}>
              Candidate-se para essa oportunidade
            </Button>
          </>
        </Modal>
      </S.Wrapper>
      <Pagination
        perPage={perPage}
        totalJobs={jobs.length}
        paginate={paginate}
      />
    </Container>
  )
}
