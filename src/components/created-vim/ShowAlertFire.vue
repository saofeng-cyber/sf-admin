<script setup lang="ts">
import type TVueSwalInstance from "@/composables/swal";
const $swal: TVueSwalInstance =
    getCurrentInstance()?.appContext.app.config.globalProperties.$swal;

const showAlertDefault = () => {
    $swal.fire("Any fool can use a computer");
};
const showAlertPrimart = () => {
    $swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
    });
};
const showAlertSuccess = () => {
    $swal.fire({
        position: "top-end",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        timer: 1500,
    });
};
const showAlertWarning = () => {
    $swal
        .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        })
        .then((result: { isConfirmed: any }) => {
            if (result.isConfirmed) {
                $swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                );
            }
        });
};
const showAlertInfo = () => {
    $swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
            "You can use <b>bold text</b>, " +
            '<a href="//sweetalert2.github.io">links</a> ' +
            "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down",
    });
};
const showAlertDanger = () => {
    $swal
        .fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        })
        .then((result: { isConfirmed: any; isDenied: any }) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                $swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                $swal.fire("Changes are not saved", "", "info");
            }
        });
};
</script>
<template>
    <el-card class="mb-4">
        <template #header>
            <div class="flex justify-between card-header">
                <h3>Sweetalert2</h3>
                <el-link
                    type="primary"
                    href="https://sweetalert2.github.io/"
                    target="_blank"
                    >To Sweetalert2</el-link
                >
            </div>
        </template>
        <div class="flex flex-wrap gap-[2px] justify-center items-center">
            <el-button @click="showAlertDefault"> Default </el-button>
            <el-button type="info" @click="showAlertInfo"> Info </el-button>
            <el-button type="primary" @click="showAlertPrimart">
                Primary
            </el-button>
            <el-button type="success" @click="showAlertSuccess">
                Success
            </el-button>
            <el-button type="warning" @click="showAlertWarning">
                Warning
            </el-button>
            <el-button type="danger" @click="showAlertDanger">
                Danger
            </el-button>
        </div>
    </el-card>
</template>
