# Im here - Event Participant Manager

This is a very simple React Native application built with Expo. It allows the user to add and remove participants in a hypothetical event.

## Features

- Add a new participant
- Delete a participant
- Check if a participant already exists
- Display a list of current participants

## Getting Started

### Prerequisites

- Node.js
- npm
- Expo CLI

### Installation

1. Clone the repository:

```sh
git clone https://github.com/JulioCesarTeixeira/imhere.git
```

2. Install the dependencies:

```sh
npm install
```

3. Run the application:

```sh
expo start
```

This command will open up a new tab in your web browser with the Expo developer tools. You can then run the app on your device by scanning the QR code or in an emulator.

## Usage

When you run the app, it displays the event's name and date at the top. Below this, there is a form to add a new participant. Simply type in the name and press the "+" button to add them to the list. If the participant already exists, an alert will be displayed.

The list of participants is displayed below the form. If there are no participants, a message will be displayed stating that the list is empty. If a participant needs to be removed, press the "Remove" button next to the participant's name. A confirmation alert will be displayed, and upon confirmation, the participant will be removed from the list.
