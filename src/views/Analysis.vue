<script setup lang="ts">
// import StatisticsCard from "@/components/container/src/card/StatisticsCard.vue";
import InfoCard from "@/components/container/src/card/InfoCard.vue";
interface CardList {
    header: string;
    icon: string;
    numIcon: string;
    color: string;
    num: number;
}
const cardList = ref<Array<CardList>>([
    {
        header: "访问数",
        icon: "ic:baseline-remove-red-eye",
        numIcon: "game-icons:histogram",
        color: "#d84c92",
        num: 53000,
    },
    {
        header: "成交额",
        icon: "fa6-solid:hand-holding-dollar",
        numIcon: "mingcute:receive-money-fill",
        color: "#7053bb",
        num: 103430,
    },
    {
        header: "下载数",
        icon: "material-symbols:cloud-download",
        numIcon: "ic:outline-download",
        color: "#5da8ff",
        num: 3462,
    },
    {
        header: "成交数",
        icon: "material-symbols:handshake",
        numIcon: "bi:r-circle-fill",
        color: "#fedc69",
        num: 2400,
    },
]);
const activities = [
    {
        content: "Custom icon",
        timestamp: "2018-04-12 20:46",
        icon: "ep:help-filled",
    },
    {
        content: "Custom color",
        timestamp: "2018-04-03 20:46",
        color: "#0bbd87",
    },
    {
        content: "Custom size",
        timestamp: "2018-04-03 20:46",
    },
    {
        content: "Custom hollow",
        timestamp: "2018-04-03 20:46",
        hollow: true,
    },
    {
        content: "Default node",
        timestamp: "2018-04-03 20:46",
    },
];
const handleClick = () => {
    console.log("click");
};

const tableData = [
    {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
    },
];
</script>
<template>
    <div class="w-full h-full">
        <el-row :gutter="12">
            <el-col :lg="18" :span="24" class="h-[360px]">
                <div class="h-full bg-white rounded-2xl dark:bg-[#121212]">
                    <LineChart />
                </div>
            </el-col>
            <el-col :lg="6" :span="24" class="peichart h-[360px]">
                <div class="h-full bg-white rounded-2xl dark:bg-[#121212]">
                    <PieChart />
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div
                    class="grid grid-cols-1 mt-4 sm:grid-cols-2 s_grid lg:grid-cols-4"
                >
                    <template v-for="item in cardList" :key="item.header">
                        <InfoCard
                            :title="item.header"
                            :value="item.num"
                            :icon="item.icon"
                            :prefix="item.numIcon"
                            :background="item.color"
                        />
                    </template>

                    <!-- <el-card
                        v-for="item in cardList"
                        :key="item.header"
                        shadow="hover"
                        class="box-card"
                    >
                        <template #header>
                            <div
                                class="flex items-center justify-between card-header"
                            >
                                <span>{{ item.header }}</span>
                                <IconifyVue
                                    :icon="item.icon"
                                    :width="32"
                                    :height="32"
                                    :style="{ color: item.color }"
                                />
                            </div>
                        </template>
                        <div class="text item">
                            <div class="flex items-center justify-between">
                                <div class="left">
                                    <IconifyVue
                                        :icon="item.numIcon"
                                        :width="36"
                                        :height="36"
                                    />
                                </div>
                                <div class="font-bold right text-[30px]">
                                    <count-to
                                        :start-val="0"
                                        :end-val="item.num"
                                    />
                                </div>
                            </div>
                        </div>
                    </el-card> -->
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="12">
            <el-col :span="24" :lg="8">
                <el-timeline class="p-4 bg-white rounded-2xl dark:bg-[#121212]">
                    <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :icon="activity.icon"
                        :color="activity.color"
                        :hollow="activity.hollow"
                        :timestamp="activity.timestamp"
                        size="large"
                    >
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </el-col>
            <el-col :span="24" :lg="16">
                <div class="bg-white rounded-2xl dark:bg-[#121212]">
                    <el-table
                        :data="tableData"
                        size="large"
                        style="width: 100%"
                        class="sf-table"
                    >
                        <el-table-column prop="date" label="Date" width="150" />
                        <el-table-column prop="name" label="Name" width="120" />
                        <el-table-column
                            prop="state"
                            label="State"
                            width="120"
                        />
                        <el-table-column prop="city" label="City" width="120" />
                        <el-table-column
                            prop="address"
                            label="Address"
                            width="600"
                        />
                        <el-table-column prop="zip" label="Zip" width="120" />
                        <el-table-column
                            fixed="right"
                            label="Operations"
                            width="120"
                        >
                            <template #default>
                                <el-button
                                    link
                                    type="primary"
                                    size="small"
                                    @click="handleClick"
                                >
                                    Detail
                                </el-button>
                                <el-button link type="primary" size="small">
                                    Edit
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped lang="scss">
.peichart,
.sf-table {
    @media screen and (max-width: 1200px) {
        margin-top: 1rem;
    }
}

.s_grid {
    .el-card {
        --el-card-border-radius: 16px;
    }
}
</style>
