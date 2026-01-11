import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import validator from 'validator'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') // Replace with your key
    formData.append('subject', 'New Contact Form Submission from Portfolio')
    formData.append('from_name', 'Portfolio Contact Form')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        toast.success('Email successfully sent!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        })
      } else {
        toast.error('Failed to send email. Please try again.', {
          position: toast.POSITION.BOTTOM_LEFT,
        })
      }
    } catch (error) {
      toast.error('Failed to send email. Please try again.', {
        position: toast.POSITION.BOTTOM_LEFT,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }
  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !message}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
