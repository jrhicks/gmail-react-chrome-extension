## Gmail React Chrome Extension

This is bowlerplate repo for building React-based Chrome Extension for Gmail.

## React Based

The boilerplate loads the React App into the Gmail page and supplies the gmail object which you can observe.

```jsx
const App = (props) => {
    const { gmail } = props;
    const [userOpened, setUserOpened] = useState(true); 
    const [fromAddress, setFromAddress] = useState(''); 
    
    gmail.observe.on("view_email", (domEmail) => {
        const emailData = gmail.new.get.email_data(domEmail);
        setFromAddress(emailData.from.address);
    });

    const toggleUserOpened = () => {
        setUserOpened(!userOpened);
    };

    const panelStyle = {
        height: (userOpened) ? '50vh' : 'auto', 
    }

    return (
        <div id="sidePanel" style={panelStyle}>
            <div onClick={toggleUserOpened} style={headerStyle}>
                <b>My Extension</b>
            </div>          
            {
                userOpened && (
                    <div id="content" style={bodyStyle}>
                        {fromAddress && <span>From: {fromAddress}</span>}
                    </div>
                )
            }
        </div>
    );
}
```

![screenshot](./screen_shots/opened.png)

## Interacting w/ Gmail

Using [gmail.js](https://github.com/KartikTalwar/gmail.js/) it can observe gmail events.  For example:

```javascript
    gmail.observe.on("view_email", (domEmail) => {
        const emailData = gmail.new.get.email_data(domEmail);
        setFromAddress(emailData.from.address);
    });
```

## Purpose

For educational purposes only.  See MIT License.

## Development

First get the code and build it:

````
git clone https://github.com/jrhicks/gmail-react-chrome-extension.git
cd gmail-react-chrome-extension
npm install
npm run build
````

Next, load the extension into Chrome:

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable `Developer mode`
3. Click `Load unpacked` and select the `gmail-react-chrome-extension` folder
4. Open Gmail and you should see the extension load on bottom right side of the screen

Making changes to the code:

1. Make changes to the code
2. Run `npm run build`
3. You do not have to Refresh the extension in Chrome, but you do need to refresh your browser page.

Alternatively

1. Run `npm run watch`
2. Make changes to the code
3. Refresh your browser page