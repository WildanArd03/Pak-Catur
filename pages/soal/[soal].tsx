import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { practicesDir, practicesList } from '~root/lib/constants'
import { cleanFileName, getMarkdownData } from '~root/lib/functions'
import { MarkdownData, Soal } from '~root/lib/types'

type SoalParams = {
  soal: string
}

type SoalProps = {
  judul: string
  data: MarkdownData
}

const SoalIndex: NextPage<SoalProps> = ({
  judul,
  data: {
    metadata: { title, soal: daftarSoal },
  },
}) => {
  return (
    <div>
      <p>Hai aku {title}</p>

      <form>
        {(daftarSoal as Soal[]).map(soal => {
          return (
            <div key={soal.pertanyaan}>
              <span>{soal.pertanyaan}</span>
              {soal.daftarJawaban.map(({ jawaban, trueKah }) => (
                <div>
                  <label>
                    <input type='radio' value={trueKah ? 'true' : ''} />
                    {jawaban}
                  </label>
                </div>
              ))}
            </div>
          )
        })}
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default SoalIndex

export const getStaticPaths: GetStaticPaths<SoalParams> = async () => {
  return {
    paths: practicesList.map(practice => ({
      params: {
        soal: cleanFileName(practice),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<SoalProps, SoalParams> = async ({
  params: { soal },
}) => {
  const data = getMarkdownData(practicesDir, soal)

  return {
    props: {
      judul: soal,
      data: data,
    },
  }
}
