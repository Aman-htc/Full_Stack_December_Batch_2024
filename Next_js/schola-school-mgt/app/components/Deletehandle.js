import Swal from "sweetalert2";

export const handleDelete = async ({
    id,
    deleteApi,
    title = "Delete Record",
    successMessage = "Deleted successfully",
    onSuccess
}) => {

    const result = await Swal.fire({
        title: "Are you sure?",
        text: title,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
        await deleteApi(id);

        await Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: successMessage,
            timer: 1500,
            showConfirmButton: false,
        });

        if (onSuccess) {
            onSuccess();
        }
    } catch (error) {
        console.log(error);

        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Delete failed",
        });
    }
};