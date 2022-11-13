<template>
  <!-- text-h4 -->
  <v-tabs
    v-model="currentDashboardSection"
    bg-color="blue accent-4"
    centered
    grow
    density="compact">
    <v-tab value="tab-unreported">
      <v-icon class="mr-2">mdi-gavel</v-icon>
      UNREPORTED
    </v-tab>
    <v-tab value="tab-reported">
      <v-icon class="mr-2">mdi-skull-crossbones</v-icon>
      REPORTED
    </v-tab>
    <v-tab value="tab-logs">
      <v-icon class="mr-2">mdi-clipboard-text-clock</v-icon>
      LOG
    </v-tab>
  </v-tabs>
  <v-window v-model="currentDashboardSection">
    <v-window-item value="tab-unreported">
      <div centered>
        <v-btn
          prepend-icon="mdi-play"
          color="green darken-2"
          rounded="md"
          density="comfortable"
          class="ma-2"
          :disabled="!scammersSelected"
          v-show="!isReporting"
          @click="startReporting">
          Start Reporting
        </v-btn>
        <v-btn
          prepend-icon="mdi-stop"
          color="red darken-2"
          rounded="md"
          density="comfortable"
          class="ma-2"
          v-show="isReporting"
          @click="stopReporting">
          Stop Reporting
        </v-btn>
        <v-btn
          prepend-icon="mdi-cloud-download-outline"
          color="blue-grey darken-1"
          rounded="md"
          density="comfortable"
          class="ma-2">
          Update List
        </v-btn>
      </div>
      <div>
        <v-checkbox
          density="compact"
          v-model="allScammersSelected"
          @change="scammerToggleAll">
          Select All
        </v-checkbox>
      </div>
      <v-table
        density="compact"
        fixed-header
        height="200"
        class="row-pointer"
        hover>
        <thead>
          <tr>
            <th>Report</th>
            <th>Twitter Account</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <template v-bind:key="scammer.url" v-for="scammer in scammers">
            <tr
              v-if="!scammer.reported || (scammer.reported && showReported)"
              :class="getClass(scammer.reported)"
              @click="scammer.selected = !scammer.selected">
              <td>
                <input
                  type="checkbox"
                  v-model="scammer.selected"
                  @change="scammerToggled" />
              </td>
              <td>
                <a
                  :href="scammer.url"
                  target="_blank"
                  @click="scammer.selected = !scammer.selected">
                  @{{ scammer.username }}
                </a>
              </td>
              <td>{{ scammer.type }}</td>
            </tr>
          </template>
        </tbody>
      </v-table>
    </v-window-item>
    <v-window-item value="tab-reported">
      <v-table density="compact" fixed-header height="200" hover>
        <thead>
          <tr>
            <th>Twitter Account</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <template v-bind:key="scammer.url" v-for="scammer in scammers">
            <tr :class="getClass(scammer.reported)">
              <td>
                <a :href="scammer.url" target="_blank">
                  @{{ scammer.username }}
                </a>
              </td>
              <td>{{ scammer.type }}</td>
            </tr>
          </template>
        </tbody>
      </v-table>
    </v-window-item>
    <v-window-item value="tab-logs">some more shit</v-window-item>
  </v-window>
  <v-divider></v-divider>

  <v-snackbar v-model="events.starting" close-delay="1" color="green">
    Reporting Started...
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="events.starting = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="events.stopping" close-delay="1" color="red">
    Reporting Stopped.
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="events.stopping = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="events.success" close-delay="1" color="green">
    Report successful
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="events.success = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="events.failure" close-delay="1" color="red">
    Unable to complete report
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="events.failure = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      currentDashboardSection: "tab-unreported",
      isReporting: false,
      showReported: false /* TODO: remove this...*/,
      allScammersSelected: false,
      numUnreported: 2,
      numSelected: 0,
      events: {
        failure: false,
        success: false,
        starting: false,
        stopping: false,
        completed: false,
      },
      scammers: [
        {
          reported: false,
          selected: false,
          url: "https://twitter.com/osmosis_02",
          username: "osmosis_02",
          type: "Osmosis",
        },
        {
          reported: false,
          selected: false,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65",
          type: "Other",
        },
      ],
    };
  },
  computed: {
    scammersSelected() {
      if (this.scammers.find((scammer) => scammer.selected)) {
        return true;
      }
      return false;
    },
  },
  methods: {
    getClass(isReported) {
      if (isReported) {
        return "green";
      }
    },
    onReported() {
      this.setEvent("success");
      // todo: chrome notification popup
    },
    onError() {
      this.setEvent("failure");
      // todo: chrome notification popup
    },
    startReporting() {
      this.setEvent("starting");
      this.isReporting = true;
    },
    stopReporting() {
      this.setEvent("stopping");
      this.isReporting = false;
    },
    setEvent(e) {
      for (const key in this.events) {
        this.events[key] = false;
      }
      this.events[e] = true;
    },
    scammerToggleAll() {
      for (const scammer of this.scammers) {
        scammer.selected = this.allScammersSelected;
      }
    },
    scammerToggled() {
      let selected = 0;
      let unreported = 0;
      for (const scammer of this.scammers) {
        if (!scammer.reported) {
          unreported++;
          if (scammer.selected) {
            selected++;
          }
        }
      }
      this.allScammersSelected = selected == unreported;
    },
    // indeterminate,
  },
  watch: {
    // allScammersSelected: {
    //   handler() {
    //     this.scammerToggleAll();
    //   },
    // },
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
custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.row-pointer >>> tbody tr :hover {
  cursor: pointer;
  user-select: none;
}
</style>
