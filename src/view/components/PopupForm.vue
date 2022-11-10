<template>
  <div class="switch">
    <v-switch
      density="compact"
      label="Show Reported"
      color="green"
      ml6
      h-0
      v-model="showReported"></v-switch>
  </div>
  <v-table density="compact" fixed-header theme="dark" height="200">
    <thead>
      <tr>
        <th v-if="showReported">Reported</th>
        <th>Twitter User</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <template v-bind:key="scammer.url" v-for="scammer in scammers">
        <tr
          v-if="!scammer.reported || (scammer.reported && showReported)"
          :class="getClass(scammer.reported)">
          <td v-if="showReported">{{ scammer.reported ? "✅" : "❌" }}</td>
          <td>
            <a :href="scammer.url" target="_blank">@{{ scammer.username }}</a>
          </td>
          <td>{{ scammer.type }}</td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      showReported: false,
      scammers: [
        {
          reported: false,
          url: "https://twitter.com/osmosis_02",
          username: "osmosis_02",
          type: "Osmosis",
        },
        {
          reported: false,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r wrar awr awr ",
          type: "Other",
        },
        {
          reported: true,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r ",
          type: "Other",
        },
        {
          reported: false,
          url: "https://twitter.com/osmosis_02",
          username: "osmosis_02",
          type: "Osmosis",
        },
        {
          reported: false,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r wrar awr awr ",
          type: "Other",
        },
        {
          reported: true,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r ",
          type: "Other",
        },
        {
          reported: false,
          url: "https://twitter.com/osmosis_02",
          username: "osmosis_02",
          type: "Osmosis",
        },
        {
          reported: false,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r wrar awr awr ",
          type: "Other",
        },
        {
          reported: true,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r ",
          type: "Other",
        },
        {
          reported: false,
          url: "https://twitter.com/osmosis_02",
          username: "osmosis_02",
          type: "Osmosis",
        },
        {
          reported: false,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r wrar awr awr ",
          type: "Other",
        },
        {
          reported: true,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r ",
          type: "Other",
        },
        {
          reported: false,
          url: "https://twitter.com/osmosis_02",
          username: "osmosis_02",
          type: "Osmosis",
        },
        {
          reported: false,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r wrar awr awr ",
          type: "Other",
        },
        {
          reported: true,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65r ",
          type: "Other",
        },
      ],
    };
  },
  methods: {
    getClass(isReported) {
      if (isReported) {
        return "green";
      }
    },
  },
};
</script>

<style scoped>
a {
  color: var(--colorOsmoIon);
}
.green {
  background-color: rgb(79, 117, 88);
}
.green a {
  color: var(--colorOsmoWosmo);
}
.switch {
  padding-left: 10px;
  height: 45px;
  border-bottom: 1px solid #515151;
  background-color: #212121;
}
</style>
