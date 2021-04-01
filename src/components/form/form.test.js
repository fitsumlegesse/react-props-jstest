import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from './Form'

describe('testing form component', ()=>{
    it('Needs to run a function on button click', async ()=>{
        let handleUpdate = jest.fn()

        render(<Form updatePeople={handleUpdate}/>)
        let button = screen.getByText('Click to get people')

        expect(button).toBeInTheDocument()
        fireEvent.click(button)

        await waitFor(()=> expect(handleUpdate).toHaveBeenCalled())
    })
})