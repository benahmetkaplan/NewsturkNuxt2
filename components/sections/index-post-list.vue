<template>
    <div>
        <div class="sectionTitle mt-2 mb-2">
            <div class="title">
                <h1>{{ title }}</h1>
            </div>
        </div>
        <div class="row" v-if="postList().length === 0">
            <div class="col-6">
                <content-placeholders :rounded="true">
                    <content-placeholders-img />
                    <content-placeholders-text :lines="1" />
                </content-placeholders>
            </div>
            <div class="col-6">
                <content-placeholders :rounded="true">
                    <content-placeholders-img />
                    <content-placeholders-text :lines="1" />
                </content-placeholders>
            </div>
            <div class="col-6">
                <content-placeholders :rounded="true">
                    <content-placeholders-img />
                    <content-placeholders-text :lines="1" />
                </content-placeholders>
            </div>
            <div class="col-6">
                <content-placeholders :rounded="true">
                    <content-placeholders-img />
                    <content-placeholders-text :lines="1" />
                </content-placeholders>
            </div>
            <div class="col-6">
                <content-placeholders :rounded="true">
                    <content-placeholders-img />
                    <content-placeholders-text :lines="1" />
                </content-placeholders>
            </div>
            <div class="col-6">
                <content-placeholders :rounded="true">
                    <content-placeholders-img />
                    <content-placeholders-text :lines="1" />
                </content-placeholders>
            </div>
        </div>
        <div class="row" v-if="postList().length > 0">
            <div class="col-6" v-for="item in postList()" :key="item.title">
                <a :href="`/post/${item.id}`" v-if="item" class="postItem">
                    <div class="imageWrapper">
                        <img :src="item.image" alt="image" class="image">
                    </div>
                    <h2 class="title" v-html="item.title"></h2>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "IndexPostList",
    props: ['items', 'title'],
    methods: {
        postList() {
            return this.items
        }
    }
}

</script>