import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Token from '../components/Token'
 
export default class extends React.Component {
 static async getInitialProps({ query }) {
    const request = await fetch(`https://aerolab-challenge.now.sh/redeem`,{
        method: 'POST',
        headers:  {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': Token
        },
        body : "{\"productId\" : \""+query.id+"\"}"
        })
    const redeem = await request.json()
    console.log(redeem)

    return { redeem }
 }
 render() {
   return <Layout title="Layouts">
     <h1>{ this.props.redeem.message }</h1>
     <h1>{ this.props.redeem.error }</h1>
 
     <style jsx>{` /* Your Page’s CSS */ `}</style>
   </Layout>
  }
}