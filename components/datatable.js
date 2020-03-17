import Table from 'rc-table'
import { Button } from 'react-bootstrap';

function DataTable(props) {

    const createDataTableObject = (key) => {
        return {
            key: key.id,
            title: key.title,
            image: key.image,
            correctAnswer: key.answers[0].content
        }
    }

    const imageStyle = {
      height: "50px"
    }

    const columns = [
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          width: 300,
          render: (image) => <img style={imageStyle} src={image}></img>
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          width: 300,
        },
        {
          title: 'Correct Answer',
          dataIndex: 'correctAnswer',
          key: 'correctAnswer',
          width: 300
        },
        {
          title: 'Operations',
          dataIndex: 'key',
          key: 'key',
          render: (key) => <Button variant="danger" className='my-4' value={key} onClick={props.handleDelete}>Delete</Button>,
        },
      ];

    const data = props.content.map(createDataTableObject);

    return(
      <div>
        <Table columns={columns} data={data} />
      </div>
    )
}

export default DataTable