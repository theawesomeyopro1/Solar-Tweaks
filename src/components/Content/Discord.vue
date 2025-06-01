<template>
  <div id="discord-container">
    <Card
      icon="fa-brands fa-discord"
      title="Discord"
      subtitle="Joining our Discord is the best way to get support"
      background="discord"
      id="discord-card"
    >
      <CardItem>
        <div id="discord-card-container">
          <p id="discord-text">
            Our Discord is full of useful information and guides on how to use
            our software! Do you need help, do you have a suggestion, or do you
            just want to chat about the application? Join our Discord server!
            Notifications, important announcements and development updates will
            be posted there as well, so make sure to check it out!
          </p>
          <div id="discord-invite" v-if="!$store.getters.isDiscordLogged">
            <p id="invite-caption">You've been invited to join a server</p>
            <div id="invite-layout">
              <div id="invite-content">
                <div id="invite-icon-wrapper">
                  <img
                    src="@/assets/logo.svg"
                    id="invite-icon"
                    draggable="false"
                    alt="Solar Tweaks Logo"
                  />
                </div>
                <div id="invite-text">
                  <p id="invite-title">Solar Tweaks</p>
                  <p>Support, help, resources and more!</p>
                </div>
              </div>
              <button id="join-button" @click="openInvite()">Join</button>
            </div>
          </div>
        </div>
      </CardItem>
    </Card>
  </div>
</template>

<script>
import Card from '../Card/Card.vue';
import CardItem from '../Card/CardItem.vue';
import { remote } from 'electron';
import constants from '../../constants';

export default {
  name: 'Discord',

  components: {
    Card,
    CardItem,
  },

  methods: {
    /**
     * Opens the Discord invite link in the default browser
     */
    openInvite() {
      remote.shell.openExternal(constants.links.DISCORD);
    },
  },
};
</script>

<style scoped>
#discord-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#discord-card {
  margin-top: 50px;
}

#discord-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
}

#discord-text {
  width: 80%;
  font-size: smaller;
  font-weight: 300;
  letter-spacing: 0.55px;
  line-height: 1.5;
}

#discord-invite {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #2f3136;
  border-radius: 10px;
  height: 110px;
  margin-top: 20px;
  padding: 20px;
}

#invite-caption {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #b9bbbe;
  margin-bottom: 12px;
}

#invite-icon-wrapper {
  display: flex;
  width: 71px;
  height: 71px;
  justify-content: center;
  background: #36393f;
  border-radius: 15px;
}

#invite-icon {
  width: 64px;
}

#invite-layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#invite-content {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px;
  width: 100%;
}

#invite-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 85%;
  padding-left: 10px;
}

#invite-text,
#join-button {
  font-size: 1rem;
}

#invite-title {
  font-weight: 800;
  letter-spacing: 1.1px;
}

#join-button {
  width: 120px;
  height: 70%;
  border: 0px;
  border-radius: 10px;
  background-color: #3ba55d;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

#join-button:hover {
  background-color: #2d7d46;
}
</style>
