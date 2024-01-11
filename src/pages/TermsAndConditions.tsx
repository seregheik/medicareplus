import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

const TermsAndConditions = (props: any) => {
  const hey = [{yam:'r', p:'t'},{yam:'t', p:'rrr'}]
  const Termsdata = (props.information.termsofservice)
  console.log(Termsdata)
  console.log(hey)
  return (
    <section className='container'>
      <h1 className="text-center text-3xl text-primary font-bold mt-8">Terms and Conditions</h1>
      <div className="terms text-start">
      {Termsdata.map((termsofservice: {
        subContent: ReactNode
        subTitle: ReactNode ;title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined 
}, key: Key | null | undefined) =>{
        return(
          <>
          <h3 className='fw-bold fs-5 text-primary' key={key}>{termsofservice.title}</h3>
          <p key={key}>{termsofservice.content}</p>
          <p key={key} ><span className="text-primary fw-semibold">{termsofservice.subTitle}</span>{termsofservice.subContent}</p>
          </>
        )
      })}
      </div>
    </section>
  )
}

export default TermsAndConditions