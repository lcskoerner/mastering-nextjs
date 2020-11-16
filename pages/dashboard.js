import Image from 'next/image'

const Dashboard = ({ name, bio, avatar_url }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{`Bio: ${bio}`}</p>
      <Image
        src={avatar_url}
        alt='Github Avatar'
        width={460}
        height={460}
      />
    </>
  )
}

Dashboard.getInitialProps = async () => {
  const url = 'https://api.github.com/users/lcskoerner'
  const res = await fetch(url)
  const user = await res.json()
  return user
}

export default Dashboard
