ORIGINAL KEYFRAMES FOR HOME HERO ANIMATION (without delay after each keyframe)

.hero--card-david {
    animation: 10s infinite ease-out top-card; 
}
.hero--card-mary {
    animation: 10s infinite ease-out middle-card;
}
.hero--card-slay {
    animation: 10s infinite ease-out bottom-card;
}

@keyframes top-card {
    0% {
        transform: translateY(0px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    33% {
        transform: translateY(312px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    66% {
        transform: translateY(156px) scale(1);
        opacity: 100%;
    }
    100% {
        transform: translateY(0px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
}

@keyframes middle-card {
    0% {}
    33% {
        transform: translateY(-156px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    66% {
        transform: translateY(156px) scale(0.6);
        opacity: 50%;
        transform-origin: top left;
    }
    100% {
        transform: translateY(-0px) scale(1);
        opacity: 100%;
    }
}

@keyframes bottom-card {
    0% {
        transform: translateY(0px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    33% {
        transform: translateY(-156px) scale(1);
        transform-origin: top left;
        opacity: 100%;
    }
    66% {
        transform: translateY(-312px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    100% {
        transform: translateY(0px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
}


ORIGINAL KEYFRAMES FOR HOME HERO ANIMATION (without delay after each keyframe) (Mobile 576px)

@keyframes top-card {
    0% {
        transform: translateY(0px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    33% {
        transform: translateY(156px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    66% {
        transform: translateY(78px) scale(1);
        opacity: 100%;
    }
    100% {
        transform: translateY(0px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
}

@keyframes middle-card {
    0% {}
    33% {
        transform: translateY(-78px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    66% {
        transform: translateY(78px) scale(0.6);
        opacity: 50%;
        transform-origin: top left;
    }
    100% {
        transform: translateY(-0px) scale(1);
        opacity: 100%;
    }
}

@keyframes bottom-card {
    0% {
        transform: translateY(0px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    33% {
        transform: translateY(-78px) scale(1);
        transform-origin: top left;
        opacity: 100%;
    }
    66% {
        transform: translateY(-156px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    100% {
        transform: translateY(0px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
}


ADJUSTED KEYFRAMES FOR HOME HERO ANIMATION (to increase delay after each keyframe)

.hero--card-david {
    animation: top-card 7s infinite ease-out;
}
.hero--card-mary {
    animation: middle-card 7s infinite ease-out;
}
.hero--card-slay {
    animation: bottom-card 7s infinite ease-out;
}

@keyframes top-card {
    0% {
        transform: translateY(0px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    20% {
        transform: translateY(0px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    30% {
        transform: translateY(312px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    50% {
        transform: translateY(312px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    60% {
        transform: translateY(156px) scale(1);
        opacity: 100%;
    }
    80% {
        transform: translateY(156px) scale(1);
        opacity: 100%;
    }
    100% {
        transform: translateY(0px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
}

@keyframes middle-card {
    0% {
        transform: translateY(0px) scale(1);
        opacity: 100%;
    }
    20% {
        transform: translateY(0px) scale(1);
        opacity: 100%;
    }
    30% {
        transform: translateY(-156px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    50% {
        transform: translateY(-156px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    60% {
        transform: translateY(156px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    80% {
        transform: translateY(156px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    100% {
        transform: translateY(0px) scale(1);
        opacity: 100%;
    }
}

@keyframes bottom-card {
    0% {
        transform: translateY(0px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    20% {
        transform: translateY(0px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
    30% {
        transform: translateY(-156px) scale(1);
        transform-origin: top left;
        opacity: 100%;
    }
    50% {
        transform: translateY(-156px) scale(1);
        transform-origin: top left;
        opacity: 100%;
    }
    60% {
        transform: translateY(-312px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    80% {
        transform: translateY(-312px) scale(0.6);
        transform-origin: bottom left;
        opacity: 50%;
    }
    100% {
        transform: translateY(0px) scale(0.6);
        transform-origin: top left;
        opacity: 50%;
    }
}