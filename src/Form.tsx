import { createSignal,createEffect } from "solid-js";
import { Form,Button } from "solid-bootstrap";

function MytestForm(){

    type FormData = {
        UN : string
        KW : string
    }

    const [FormData,setFormData] = createSignal({
        UN:"",
        KW:""
    })

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="name" placeholder="Enter UserName" />
                    <Form.Text class="test-muted">
                        ユーザ名を入力してください
                    </Form.Text>
                    
                    <Form.Control type="name" placeholder="Enter Keyword" />
                    <Form.Text class="test-muted">
                        キーワードを入力してください
                    </Form.Text>
                </Form.Group>
                <button class="primary" type="submit" >Submit</button>
            </Form>
            
        </div>
    )
}

export default MytestForm