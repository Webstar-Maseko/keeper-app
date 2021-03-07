import Snackbar from "@material-ui/core/Snackbar";




function FeedBack(props){
  
    return (<Snackbar anchorOrigin={{vertical: "top", horizontal:"center"}}  open={props.open} autoHideDuration={6000} message={props.message} onClose={props.setOpen}>
      
       
    
    </Snackbar> )
}

export default FeedBack;