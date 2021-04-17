const trigger = new ScrollTrigger.default()
    trigger.add('[data-trigger]',
        {
            once: false,
            offset: {
                viewport: {
                    y: (trigger, frame, direction) => {
                        return trigger.visible ? 0 : .3
                    }
                }
            },
        },
    )