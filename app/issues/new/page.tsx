



import React from 'react'
import IssueForm from '../_component/IssueForm'
import delay from 'delay'

const NewIssuePage = async() => {
  await delay(250)
  return (
    <div>
        <IssueForm/>
    </div>
  )
}

export default NewIssuePage