
<script lang="ts">
    import { navigdateTo } from '@/lib/extension-runtime'


    import Alert from '@/components/alert.svelte'

  interface Props {
    isActive?: boolean;
  }

  let { isActive = false }: Props = $props();
    const targetUrl = 'farcaster.xyz'
    let isVerifyingProxy = false;
    let alert: any & { showAlert: (msg: string, type: 'warning' | 'success' | 'danger' | 'info') => void } = $state();

    const promptForSignIn = async () => {

    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
      const lastTab = tabs[0];

        if(!lastTab) {
            alert.showAlert('No active tab found', 'danger')
            return;
        }

        if(!lastTab?.url?.includes(targetUrl)) {
            alert.showAlert('You are not on farcaster.xyz page', 'danger')
            return;
        }
        if(!lastTab.id) {
            alert.showAlert('No active tab found', 'danger')
            return;
        }

        chrome.scripting.executeScript({
            target: {tabId: lastTab.id},
            func: () => {
                window.postMessage({type: 'farcaster-login'}, '*');
            }
        })

        window.close();
    });



    }

 
</script>


<div id="tab-1" class="{`tab-pane ${isActive ? 'active' : ''} ${ isVerifyingProxy ? 'blink' : ''}`}">

    <Alert bind:this={alert} alertMsg="" alertType="warning" alertVisible={false} alertTimeout={0} />

    
    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Before Login:</h2>
    <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-left text-[1.1rem]">
        <li class="flex items-center" style="margin-bottom: 1rem;">
            <p class="block">
            <svg class="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0 svg-align" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
             </svg>
             Your active tab should be on <a style="color: blueviolet;" onclick={() => { navigdateTo('https://farcaster.xyz')}} href="#link1">farcaster.xyz</a>.
             </p>
        </li>
        <li class="flex" style="margin-bottom: 1rem;">
            <p class="block">
            <svg class="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0 svg-align" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
             </svg>
             You need an Ethereum wallet, <a style="color: blueviolet;" onclick={() => { navigdateTo('https://clear-wallet.flashsoft.eu')}} href="#link1">ClearWallet</a> & <a style="color: blueviolet;" onclick={() => { navigdateTo('https://metamask.io/')}} href="#link2">Metamask</a>, were tested.
             </p>
        </li>
        <li class="flex" style="margin-bottom: 1rem;">
            <p class="block">
            <svg class="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0 svg-align" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
             </svg>
             You need to sign the message with the address(custody account) that owns your FID(Farcaster ID).
             </p>
        </li>
        <li class="flex items-center" style="margin-bottom: 1rem;">
             <p class="block">
          <svg class="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0 svg-align" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
           </svg>
           If you don't have the address that owns your FID, it's necessary to import it to your wallet.
           </p>
      </li>
    </ul>

    <button onclick={() => {
        promptForSignIn();
      }} class="btn btn-green cursor-pointer" style="margin-bottom: 1rem;" id="btnProxyStart">Prompt wallet signature to sign in</button>

  </div>

  <style lang="scss">

.blink {
    animation: blinker 1s linear infinite;
    cursor: wait;
}

.svg-align {
    display: inline-block;
}

@keyframes blinker {
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


  </style>