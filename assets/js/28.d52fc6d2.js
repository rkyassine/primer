(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{228:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"tag-a-user-inside-a-post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag-a-user-inside-a-post"}},[s._v("#")]),s._v(" Tag a user inside a post")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Rewards")]),s._v(" "),a("p",[s._v("Upon completing this challenge, you will be rewarded "),a("strong",[s._v("50 Desmos Tokens")]),s._v(".")]),s._v(" "),a("p",[s._v("Please note that in order to prevent spam, you will receive the reward just "),a("strong",[s._v("for the first tagged post")]),s._v(" you create. No tokens will be awarded for later tags.")])]),s._v(" "),a("p",[s._v("With version "),a("code",[s._v("v0.6.0")]),s._v(" we've implemented the function that allows you to tag other users inside the medias that you attach to a post.")]),s._v(" "),a("h2",{attrs:{id:"create-your-first-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-tag"}},[s._v("#")]),s._v(" Create your first tag")]),s._v(" "),a("p",[s._v("Tagging a user inside a media is pretty simple; all you have to provide is:")]),s._v(" "),a("ol",[a("li",[s._v("a "),a("code",[s._v("media")]),s._v(" representing the multimedia file that you want to attach to the file;")]),s._v(" "),a("li",[s._v("the "),a("code",[s._v("address")]),s._v(" of the user you want to tag.")])]),s._v(" "),a("p",[s._v("To tag a user, all you have to do is execute the following command:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli tx posts create "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("subspace"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --media "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<your-media-url>,<your-media-mimetype>,<user-address-to-tag>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id morpheus-7001 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-key-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("Here's an example of such command:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli tx posts create 4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --media "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example.com/media1,text/plain,desmos1ulmv2dyc8zjmhk9zlsq4ajpudwc8zjfm82aysr"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id morpheus-7001 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from jack --yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this:")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("txhash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 7169B8C88150090BF972F865876B3AA8A37DDD01ED4D8320B0FC680877444549\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rawlog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gaswanted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gasused")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("To make sure the transaction has been processed successfully, you can query it using the following command:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli query tx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --trust-node --output json\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# desmoscli query tx 7169B8C88150090BF972F865876B3AA8A37DDD01ED4D8320B0FC680877444549 \\")]),s._v("\n  --trust-node --output json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("This will return you the JSON representation of the transaction itself.")]),s._v(" "),a("h2",{attrs:{id:"getting-the-reward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-reward"}},[s._v("#")]),s._v(" Getting the reward")]),s._v(" "),a("p",[s._v("After you've created the tagged post, to make sure you receive your reward please follow this procedure:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Create a fork of this repo inside your private GitHub profile."),a("br"),s._v("\nIf you do not know how to do it, follow the "),a("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub fork guide"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("li",[a("p",[s._v("Pull the fork locally:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/primer.git ~/desmos-primer\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/desmos-primer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Make sure your fork is up to date with the Primer repository:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" upstream https://github.com/desmos-labs/primer.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch upstream\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase upstream/master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Create a file named after your GitHub username containing the post creation transaction hash:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<tx-hash>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./phase-5/submissions/tags/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-github-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "7169B8C88150090BF972F865876B3AA8A37DDD01ED4D8320B0FC680877444549" >> ./phase-5/submissions/tags/RiccardoM')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the "),a("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pull Requests guide"),a("OutboundLink")],1),s._v(".")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);