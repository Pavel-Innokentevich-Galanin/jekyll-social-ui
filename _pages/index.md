---
layout: default
title: Home
description: Social UI
---

{% include Profile.html %}
<div class="af-ptf-msg">
    {% include Windows/ActivityFeed/ActivityFeed.html %}
    {% include Windows/PeopleToFollow/PeopleToFollow.html %}
    {% include Windows/Chat/Chat.html %}
</div>
{% include Dialogues/Dialogues.html %}