import Header from '../../../components/header'

const Post = ({ title, body }) => {
  return (
    <>
      <Header />
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  )
}

Post.getInitialProps = async ({ query }) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${query.id}`
  const post = fetch(url).then(res => res.json())
  return post
}

export default Post
