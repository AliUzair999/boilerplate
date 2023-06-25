
import { useSelector, useDispatch } from 'react-redux'


export default function Signup() {
    const dispatch = useDispatch()
    const reduxState = useSelector((state) => state)
    console.log(reduxState)

    return <>
        <h1>
            This is Signup Page
        </h1>

    </>
}