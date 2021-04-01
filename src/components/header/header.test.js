import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

describe('Testing the header component',  ()=>{
   it('displays a title on the initial render', async()=>{
    render(<Header title="React Props!!" />)
    expect(screen.getByText('React Props!!')).toBeInTheDocument()
   })

   it('can change on button click', async()=>{
       let title = 'React Props!!'
       let changeTitle = (string)=>{
           title= string
       }

       let { rerender } = render (<Header changeTitle={changeTitle} title={title}/>)
       let button= await screen.findByText('Change title')

       fireEvent.click(button)

       rerender(<Header changeTitle={changeTitle} title={title}/>)
       expect(screen.getByText('changed')).toBeInTheDocument()

   })
    


})