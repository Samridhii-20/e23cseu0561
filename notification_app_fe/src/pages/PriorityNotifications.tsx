import {
    Card,
    CardContent,
    Typography,
    Chip,
} from "@mui/material";

function getPriority(type: string) {
    if (type === "Placement") return 3;

    if (type === "Result") return 2;

    return 1;
}

function PriorityNotifications({
    notifications,
    viewed,
    setViewed,
}: any) {
    const sortedNotifications =
        [...notifications].sort(
            (a: any, b: any) =>
                getPriority(b.Type) -
                getPriority(a.Type)
        );

    return (
        <div style={{ padding: "20px" }}>
            <Typography
                variant="h4"
                gutterBottom
            >
                Priority Inbox
            </Typography>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                }}
            >
                {sortedNotifications
                    .slice(0, 5)
                    .map((item: any, index: number) => (
                        <Card
                            key={item.ID}
                            onClick={() => {
                                if (!viewed.includes(item.ID)) {
                                    setViewed([
                                        ...viewed,
                                        item.ID,
                                    ]);
                                }
                            }}
                            sx={{
                                borderLeft:
                                    viewed.includes(item.ID)
                                        ? "none"
                                        : "6px solid green",

                                backgroundColor:
                                    viewed.includes(item.ID)
                                        ? "#fff"
                                        : "#f1fff1",

                                cursor: "pointer",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6">
                                    {item.Type}
                                </Typography>

                                <Typography sx={{ mt: 1 }}>
                                    {item.Message}
                                </Typography>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        marginTop: "16px",
                                    }}
                                >
                                    <Chip label={item.Type} />

                                    <Chip
                                        label={
                                            viewed.includes(item.ID)
                                                ? "Read"
                                                : "Unread"
                                        }
                                        color={
                                            viewed.includes(item.ID)
                                                ? "default"
                                                : "success"
                                        }
                                    />
                                </div>

                                <Typography
                                    variant="body2"
                                    sx={{ mt: 2 }}
                                >
                                    {item.Timestamp}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </div>
    );
}

export default PriorityNotifications;