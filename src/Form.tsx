import { createSignal,createEffect } from "solid-js";
import { Form,Button } from "solid-bootstrap";

function MytestForm(){
    let UN = "";
    let KW = "";
    createEffect(() => console.log("ユーザ名が"+UN+"で、キーワードが"+KW+"です"));
    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Form.Control value={UN} type="name" placeholder="Enter UserName" />
                    <Form.Text class="test-muted">
                        ユーザ名を入力してください
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control value={KW} type="name" placeholder="Enter Keyword" />
                    <Form.Text class="test-muted">
                        キーワードを入力してください
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            
        </div>
    )
}

export default MytestForm