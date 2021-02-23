<script lang="ts">
    import type { ServerStatus } from "../types/ServerStatusType";
    import MinecraftTextJS from "minecraft-text-js";
    import PlayerCard from "./PlayerCard.svelte";

    export let data: ServerStatus;
    let minecraftHtml = MinecraftTextJS.toHTML(data.description);
</script>

<div class="serverStatus">
    <div class="card" style="margin:1rem;">
        <div class="card-header bg-secondary">
            <div
                class="d-flex justify-content-between align-items-center w-100"
            >
                <h3>
                    {#if data.online}
                        <span class="badge badge-success">{data.name}</span>
                    {:else}
                        <span class="badge badge-danger">{data.name}</span>
                    {/if}
                </h3>
                <h3>
                    {#if data.description !== ""}
                        <div
                            contenteditable="true"
                            bind:innerHTML={minecraftHtml}
                        />
                    {/if}
                </h3>
                <h2>
                    {data.playerCount}

                    <button type="button" class="btn btn-white">
                        <ion-icon name="chevron-down-outline" />
                    </button>
                </h2>
            </div>
        </div>
        {#if data.description !== ""}
            <div class="card-body bg-light">
                <blockquote class="blockquote mb-0">
                    <div class="container">
                        <div class="column">
                            {#each data.players as player}
                                <div class="col py-1">
                                    <PlayerCard bind:data={player} />
                                </div>
                            {/each}
                        </div>
                    </div>
                </blockquote>
            </div>
        {/if}
    </div>
</div>
