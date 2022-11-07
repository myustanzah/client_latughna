import swal from "sweetalert";

export function UniversalSuccessResponse(title, text){
    let result = {
        title: title || "Good Job",
        text: text || "Success",
        icon: "success",
        button: "Ok"
    }

    return swal(result)
}

export function UniversalErrorResponse(title, text){
    let result = {
        title: title || "Somethink wrong",
        text: text || "Internal Server Error",
        icon: "error",
        button: "Ok"
    }

    return swal(result)
}