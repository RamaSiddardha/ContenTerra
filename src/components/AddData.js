import { useRef } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";

const AddData = (props) => {
  const title = useRef();
  const selftext_html = useRef();
  const score = useRef();
  const url = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      title: title.current.value,
      selftext_html: selftext_html.current.value,
      score: score.current.value,
      url: url.current.value,
    });
    props.addDataCard();
    alert("Check Console")
  };

  return (
    <Card className="mb-5">
      <Card.Header>
        <Card.Title>Add New Data</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={formSubmitHandler}>
          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Title" ref={title} />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingSelfText"
            label="Self Text HTML"
          >
            <Form.Control
              type="text"
              placeholder="selftext_html"
              ref={selftext_html}
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingScore"
            label="Score"
          >
            <Form.Control type="number" placeholder="Score" ref={score} />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingURL"
            label="URL"
          >
            <Form.Control type="url" placeholder="URL" ref={url} />
          </FloatingLabel>
          <Button type="submit" variant="warning">
            ADD DATA
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddData;
