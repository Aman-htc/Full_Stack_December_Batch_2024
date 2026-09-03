from datetime import datetime

# LOG_FILE = "error_log.txt"
LOG_FILE = "app/error_log.txt"


def write_error(error_message: str):
    try:
        with open(LOG_FILE, "a") as file:
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            file.write(f"[{timestamp}] {error_message}\n")

    except Exception as e:
        print("Logging failed:", e)