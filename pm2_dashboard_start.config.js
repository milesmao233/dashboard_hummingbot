const apps = [
    {
        name: "hummingbot_dashboard",
        script: "./run_app.py",
        interpreter: "/root/miniconda3/envs/dashboard/bin/python3.9",
        max_memory_restart: "1G",
        autorestart: false,
        watch: false,
        cwd: "/root/team/dashboard",
        output: './logs/out.log',
        error: './logs/error.log',
        log_date_format: "DD-MM-YYYY hh:mm",
        env: {
            "PYTHONPATH": "${PYTHONPATH}:/root/team/dashboard",
        }
    },
]

module.exports = {
    apps,
}