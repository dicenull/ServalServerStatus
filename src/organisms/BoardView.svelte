<script lang="ts">
    import { apiRoot } from "../consts";

    import ServerCard from "../molecules/ServerCard.svelte";
    import type { ServerStatus } from "../types/ServerStatusType";
    import type { ServersType } from "../types/ServersType";

    const fetchImage = (async (): Promise<Array<ServerStatus>> => {
        const response = await fetch(apiRoot + "servers");
        let rawTypes: ServersType = await response.json();

        return rawTypes.servers
            .sort((a, b) => (b.online ? 1 : 0) - (a.online ? 1 : 0))
            .sort((a, b) => b.playerCount - a.playerCount);
    })();
</script>

{#await fetchImage}
    <p>...waiting</p>
{:then data}
    <div class="mx-auto" style="width: 800px">
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <h6 class="border-bottom border-gray pb-2 mb-0">Servers</h6>
            {#each data as server, i}
                <ServerCard bind:data={server} />
            {/each}
        </div>
    </div>
{:catch error}
    <p>ERROR!: {error}</p>
{/await}
