<script lang="ts">
    import type { ServerStatus } from "../types/ServerStatusType";
    import MinecraftTextJS from "minecraft-text-js";
    import PlayerCard from "./PlayerCard.svelte";
    import { slide } from "svelte/transition";

    export let data: ServerStatus;
    let minecraftHtml = MinecraftTextJS.toHTML(data.description);
    let expand = false;
    let badgeColor = data.online ? "badge-success" : "badge-danger";
</script>

<div class="serverStatus">
    <div class="card" style="margin:1rem;">
        <div class="card-header bg-secondary">
            <div
                class="d-flex justify-content-between align-items-center w-100"
            >
                <h2>
                    <div class="row pl-2">
                        <span class="col badge {badgeColor}">{data.name}</span>
                        <span class="col badge badge-primary"
                            >{data.playerCount}</span
                        >
                    </div>
                </h2>

                <h3>
                    {#if data.description !== ""}
                        <div
                            contenteditable="true"
                            bind:innerHTML={minecraftHtml}
                        />
                    {/if}
                </h3>
                {#if data.playerCount > 0}
                    <h2>
                        <button
                            type="button"
                            class="btn btn-white"
                            on:click={() => (expand = !expand)}
                        >
                            {#if expand}
                                <ion-icon name="chevron-up-outline" />
                            {:else}
                                <ion-icon name="chevron-down-outline" />
                            {/if}
                        </button>
                    </h2>
                {:else}
                    <div />
                {/if}
            </div>
        </div>
        {#if expand}
            <div class="card-body bg-light" transition:slide>
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

<style>
    ion-icon {
        font-size: 32px;
        border-radius: 50%;
        color: white;
    }
</style>
