
import { useSelector, useDispatch } from 'react-redux'


export default function Login() {
    const dispatch = useDispatch()
    const reduxState = useSelector((state) => state)
    console.log(reduxState)

    return <>
        <h1>
            This is Login Page
        </h1>

    </>
}