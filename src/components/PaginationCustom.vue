<template>
    <div class="borderless">
        <ul class="list-group list-group-horizontal list-group-flush">
            <li class="list-group-item" style="border: none;">
                <button type="button" class="btn btn-primary"
                        v-show="activePage > 1"
                        @click="getSpecificPage(activePage-1, 'prev')">
                    < Previous
                </button>
            </li>
            <li class="list-group-item list-group-item-action"
                :class="{active: activePage === value}"
                style="border: none;"
                @click="getSpecificPage(value, null)"
                v-for="value in pagesAvailable">
                {{ value }}
            </li>
            <li class="list-group-item" style="border: none;">
                <button type="button" class="btn btn-primary"
                        v-show="pagesAvailable && activePage < pagesAvailable[pagesAvailable.length-1]"
                        @click="getSpecificPage(activePage+1, 'next')">
                    Next >
                </button>
            </li>
        </ul>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from "vuex";

    export default {
        computed: {
            ...mapGetters([
                'articlesCount',
                'activePage',
                'pageCount',
                'pagesAvailable'
            ])
        },
        methods: {
            ...mapActions([
                'asyncGetSpecificPage'
            ]),
            getSpecificPage(value, moveType) {
                this.asyncGetSpecificPage({value, moveType});
            }
        }
    }
</script>

<style scoped>
    .btn-primary {
        color: rgb(195, 104, 210);
        border-radius: 35px;
        background-color: transparent;
        border: 1px solid rgb(195, 104, 210);
        font-size: 12px;
        width: 100px;
    }

    .btn-primary:not(:disabled):not(.disabled):active,
    .show > .btn-primary.dropdown-toggle {
        color: black;
        background-color: rgb(195, 104, 210);
        border: 1px solid rgb(195, 104, 210);
        outline: none;
    }

    button:hover {
        background-color: rgb(195, 104, 210);
        border: 1px solid rgb(195, 104, 210);
    }

    button:focus {
        outline: none;
        box-shadow: none;
    }

    .borderless {
        border-top: 0 none;
        margin-top: 30px;
        margin-bottom: 100px;
    }

    li {
        cursor: pointer;
    }

</style>
