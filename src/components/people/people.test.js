import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import People from './People'


describe('Testing the people list', ()=>{

    it('Should display a list of strings passed as props ', ()=>{
        render(<People data={['Jacob', 'Adrian']}/>)

        expect(screen.getByText('Jacob')).toBeInTheDocument()
        expect(screen.getByText('Adrian')).toBeInTheDocument()
    })
})