<script setup lang="ts">
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";
const newData = {
    headings: ["NAME", "POSITION", "OFFICE", "AGE", "STARTDATE", "SALARY"],
    data: [
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "61",
            "2011/04/25",
            "$320,800",
        ],
    ],
};
onMounted(() => {
    const dataTable = new DataTable("#myTable", {
        header: true,
        searchable: true,
        fixedHeight: true,
        fixedColumns: true,
        classes: {
            active: "datatable-active", // will be "datatable-active" in version 7
            bottom: "datatable-bottom",
            container: "datatable-container",
            dropdown: "datatable-dropdown",
            ellipsis: "ellipsis", // will be "datatable-ellipsis" in version 7
            empty: "datatable-empty",
            headercontainer: "datatable-headercontainer",
            info: "datatable-info",
            input: "datatable-input",
            loading: "datatable-loading",
            pagination: "datatable-pagination",
            paginationList: "datatable-pagination-list",
            search: "datatable-search",
            selector: "datatable-selector",
            sorter: "datatable-sorter",
            table: "datatable-table",
            top: "datatable-top",
            wrapper: "datatable-wrapper",
        },
    });
    for (let i = 0; i < 99; i++) {
        newData.data.push([
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "61",
            "2011/04/25",
            "$320,800",
        ]);
    }
    dataTable.insert(newData);
});
</script>
<template>
    <el-card class="mb-4">
        <template #header>
            <div class="flex justify-between card-header">
                <h3>Datatables</h3>
                <el-link
                    type="primary"
                    href="https://github.com/fiduswriter/Simple-DataTables"
                    target="_blank"
                    >To Datatables</el-link
                >
            </div>
        </template>
        <div id="myTable"></div>
    </el-card>
</template>
<style lang="scss">
.datatable-active {
    & a {
        background: 0 0;
        background-image: linear-gradient(
            310deg,
            var(--el-color-primary),
            #2dcecc
        );
        box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
        color: #fff;
        border: none;
        border-radius: 50% !important;
    }
}
.datatable-pagination a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 3px;
    border: 1px solid #dee2e6;
    border-radius: 50% !important;
    width: 36px;
    height: 36px;
    font-size: 14px;
    margin-left: 0;
}
.datatable-search {
    font-size: 14px;
    color: #495057;
    border: 1px solid var(--el-border-color-light);
    border-radius: 8px;
}
.datatable-info {
    color: #8392ab;
    font-size: 14px;
}
</style>
