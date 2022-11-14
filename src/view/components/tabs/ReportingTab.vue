<template>
  <v-tabs
    v-model="currentReportingSection"
    bg-color="blue-darken-1"
    slider-color="indigo-darken-3"
    centered
    grow
    density="compact">
    <v-tab value="tab-list">
      <v-icon class="mr-2">mdi-list-status</v-icon>
      Hit list
    </v-tab>
    <v-tab value="tab-individual">
      <v-icon class="mr-2">mdi-target-account</v-icon>
      individual
    </v-tab>
    <v-tab value="tab-history">
      <v-icon class="mr-2">mdi-skull-crossbones</v-icon>
      Reported
    </v-tab>
  </v-tabs>
  <v-window v-model="currentReportingSection">
    <v-window-item value="tab-list">
      <div centered>
        <v-btn
          prepend-icon="mdi-play"
          color="green-darken-2"
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
          color="red-darken-2"
          rounded="md"
          density="comfortable"
          class="ma-2"
          v-show="isReporting"
          @click="stopReporting">
          Stop Reporting
        </v-btn>
        <v-btn
          prepend-icon="mdi-cloud-download-outline"
          color="blue-grey-darken-1"
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
          @change="scammerToggleAll"
          label="Select All"></v-checkbox>
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
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          <template v-bind:key="scammer.url" v-for="scammer in scammers">
            <tr
              v-if="!scammer.reported || scammer.reported"
              @click="scammer.selected = !scammer.selected">
              <td>
                <v-checkbox
                  v-model="scammer.selected"
                  @change="scammerToggled"></v-checkbox>
              </td>
              <td>
                <a :href="scammer.url" target="_blank" @click.stop="">
                  @{{ scammer.username }}
                </a>
              </td>
              <td>{{ scammer.reason }}</td>
            </tr>
          </template>
        </tbody>
      </v-table>
    </v-window-item>
    <v-window-item value="tab-individual">
      <v-form refs="individual">
        <v-container class="px-10 pt-2 pb-1">
          <v-btn
            prepend-icon="mdi-play"
            color="green-darken-2"
            rounded="md"
            density="comfortable"
            class="ma-2"
            :disabled="!individualSet"
            v-show="!isReporting"
            @click="startReportingIndividual">
            Report
          </v-btn>
          <v-btn
            prepend-icon="mdi-stop"
            color="red-darken-2"
            rounded="md"
            density="comfortable"
            class="ma-2"
            v-show="isReporting"
            @click="stopReporting">
            Stop Reporting
          </v-btn>
        </v-container>
        <v-container class="px-2 pt-0 pb-2">
          <v-select
            class="mt-2"
            label="Report Reason"
            variant="outlined"
            density="compact"
            prepend-icon="mdi-badge-account-alert"
            :menu-props="{ bottom: true, offsetY: false }"
            v-model="individual.reason"
            :rules="rules.individual.reason"
            :items="[
              {
                title: 'Scam Links - (tagging users, tweeting or retweeting)',
                value: 'SCAM_LINKS',
              },
              {
                title: 'Fake account - (impersonator / phishing)',
                value: 'IMPERSONATOR',
              },
            ]"></v-select>
          <v-text-field
            label="Twitter Account URL"
            :rules="rules.individual.url"
            hint="https://twitter.com/scammeraccount"
            variant="outlined"
            density="compact"
            prepend-icon="mdi-twitter"
            v-model="individual.url"
            class="mb-2"
            clearable></v-text-field>
          <!-- <v-text-field
            label="Additional Context"
            hint="Used when completing the reporting process..."
            variant="outlined"
            density="compact"
            prepend-icon="mdi-gift-open"
            v-model="individual.additionalContext"
            clearable></v-text-field> -->
          <v-textarea
            :placeholder="individualContextPlaceholder"
            rows="4"
            persistent-hint
            hint="Used to complete the reporting process."
            prepend-icon="mdi-alert"
            density="comfortable"
            v-model="individual.additionalContext"
            clearable
            variant="outlined"></v-textarea>
        </v-container>
      </v-form>
    </v-window-item>
    <v-window-item value="tab-history">
      <v-table density="compact" fixed-header height="200" hover>
        <thead>
          <tr>
            <th>Twitter Account</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          <template v-bind:key="scammer.url" v-for="scammer in scammers">
            <tr>
              <td>
                <a :href="scammer.url" target="_blank">
                  @{{ scammer.username }}
                </a>
              </td>
              <td>{{ scammer.reason }}</td>
            </tr>
          </template>
        </tbody>
      </v-table>
    </v-window-item>
  </v-window>
  <!-- <v-divider></v-divider> -->

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
      currentReportingSection: "tab-individual",
      isReporting: false,
      allScammersSelected: false,
      numUnreported: 2,
      numSelected: 0,
      rules: {
        reason: [(value) => !!value || "Required."],
        individual: {
          url: [
            (value) => !!value || "Required.",
            (value) => {
              const pattern = /(https:\/\/)?twitter\.com\/([a-zA-Z0-9_]{3,})/;
              return pattern.test(value) || "Invalid Twitter URL.";
            },
          ],
        },
      },
      individual: {
        reason: null,
        url: "",
        additionalContext: "",
      },
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
          reason: "Osmosis",
        },
        {
          reported: false,
          selected: false,
          url: "https://twitter.com/carlyhawk65",
          username: "carlyhawk65",
          reason: "Other",
        },
      ],
    };
  },
  computed: {
    individualContextPlaceholder() {
      let context =
        "Additional context to help motivate this account's suspension. ";
      switch (this.individual.reason) {
        case "SCAM_LINKS":
          context += `
- include example tweet(s)`;
          break;
        case "IMPERSONATOR":
          context += `
- mention who the user is impersonating.`;
          break;
        default:
          break;
      }
      return context;
    },
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
};
</script>

<style scoped>
.v-tab--selected {
  background-color: #2196f3;
}
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
