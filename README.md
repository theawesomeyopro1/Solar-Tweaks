# Solar Tweaks

## 🚧 Building from Source

Solar Tweaks is fully open-source, allowing you to download the source code and customize it as you like.

### 🔧 How to Build

Clone the repository:

```bash
git clone https://github.com/theawesomeyopro1/Solar-Tweaks.git
```

Navigate into the project directory:

```bash
cd Solar-Tweaks
```

Install dependencies:

```bash
npm install
```

For development with hot reload:

```bash
npm run serve
```

To create a production build (executables, installers, etc. will be generated in the `dist` folder):

```bash
npm run build
```

---

## 🛠 Troubleshooting

If you get the error:

```
error:0308010C:digital envelope routines::unsupported
```

Run this before any `npm run` commands:

**On Windows (Command Prompt):**
```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

**On Linux/macOS (bash/zsh):**
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

---

## 📦 Installing from Releases

If you don’t want to build from source, pre-built **Windows releases** are available.

> ⚠️ Note: They may work on Linux and macOS with compatibility layers like Wine, but this isn’t officially supported.

---

## 🧪 Installation Steps

1. Install Lunar Client from the official Lunar Client website.
2. Download the following files from the Solar Tweaks release page:
   - `solar-engine.jar`
   - `config.json`
   - Solar Tweaks setup executable
3. Run the Solar Tweaks setup executable to create the Solar Tweaks folder inside your Lunar Client directory:

```plaintext
C:\Users\<YourUsername>\.lunarclient
```

4. Copy `solar-engine.jar` and `config.json` into the `solartweaks` folder inside `.lunarclient`.
5. Launch Lunar Client. Solar Tweaks should now be injected and ready to use.
