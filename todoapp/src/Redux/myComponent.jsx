
import { useAppSelector } from '../Redux/hooks'


const MyComponent = () => {
    const count = useAppSelector((s) => s.counter)
    return <h1>MyComp: {count}</h1>

}

export default MyComponent
