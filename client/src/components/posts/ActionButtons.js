import Button from 'react-bootstrap/Button'

const   ActionButtons = ({url,_id})=>{
    return (
        <>
            <Button className='' alt='view' href={url} target='_blank'>
                View
            </Button>
            <Button className='' alt='edit' href={url} target='_blank'>
                Edit
            </Button>
            <Button className='' alt='delete' href={url} target='_blank'>
                Delete
            </Button>
        </>
    )
}
export default ActionButtons