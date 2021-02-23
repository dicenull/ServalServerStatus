<script lang="ts">
    import { apiRoot } from "../consts";

    import type { Player } from "../types/Player";

    export let data: Player;
</script>

<div class="card " style="width:160px">
    <div class="d-flex justify-content-start align-items-center ">
        <div class="pl-2 pr-1 py-auto">
            <img
                src="{apiRoot}icons/{data.id}"
                alt="{data.id} head "
                width="16px"
                height="16px"
            />
        </div>
        {data.id}
    </div>
</div>
