import React from 'react';
import {
        ListItem,
        ListItemText, 
        InputBase, 
        Checkbox,
        ListItemSecondaryAction,
        IconButton
    } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {item: props.item, readOnly: true};
        this.delete = props.delete;
        this.update = props.update;
    }
    //제거함수
    deleteEventHandler = () => {
        this.delete(this.state.item);
    }
    //readOnly -> false
    offReadOnlyMode = () => {
        console.log("EVENT!", this.state.readOnly)
        this.setState({readOnly: false}, () => {
            console.log("ReadOnly?", this.state.readOnly)
        });
    }
    //readOnly -> true
    enterKeyEventHandler = (e) => {
        if(e.key === "Enter"){
            this.setState({ readOnly: true});
            this.update(this.state.item);
        }
    }
    //edit
    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem});
    }
    //Checkbox
    checkboxEventHandle = (e) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({ item: thisItem});
        this.update(this.state.item);
    }
    render() {
        const item = this.state.item;
        return (
            <ListItem>

                <Checkbox checked={item.done} onChange ={this.checkboxEventHandle} />
                <ListItemText>
                    <InputBase
                        inputProps ={{ 
                            "aria-label": "naked",
                            readOnly: this.state.readOnly,
                        }}
                        type = "text"
                        id = {item.id}
                        name = {item.id}
                        value = {item.title}
                        //multiline = {true}
                        fullWidth = {true}
                        onClick = {this.offReadOnlyMode}
                        onChange = {this.editEventHandler}
                        onKeyPress={this.enterKeyEventHandler}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>
        );
    }
}
export default Todo;