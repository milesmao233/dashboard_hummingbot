const apps = [
    {
        name: "hummingbot_dashboard",
        script: "./run_app.py",
        interpreter: "/root/miniconda3/envs/dashboard/bin/python3.9",
        max_memory_restart: "1G",
        autorestart: false,
        watch: false,
        cwd: "/var/team/dashboard_hummingbot",
        output: './logs/out.log',
        error: './logs/error.log',
        log_date_format: "DD-MM-YYYY hh:mm",
        env: {
            "PYTHONPATH": "${PYTHONPATH}:/var/team/dashboard_hummingbot",
        }
    },
]

module.exports = {
    apps,
}