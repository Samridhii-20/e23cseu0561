import { useState } from "react";

import {
    Card,
    CardContent,
    Typography,
    Chip,
    Select,
    MenuItem,
} from "@mui/material";

function Notifications({
    notifications,
    viewed,
    setViewed,
}: any) {
    const [filter, setFilter] =
        useState("All");

    const filteredNotifications =
        filter === "All"
            ? notifications
            : notifications.filter(
                (item: any) =>
                    item.Type === filter
            );

    return (
        <div style={{ padding: "20px" }}>
            <Typography
                variant="h4"
                gutterBottom
            >
                Notifications
            </Typography>

            <Select
                value={filter}
                onChange={(e) =>
                    setFilter(e.target.value)
                }
                sx={{
                    marginBottom: "20px",
                    minWidth: "200px",
                }}
            >
                <MenuItem value="All">
                    All
                </MenuItem>

                <MenuItem value="Event">
                    Event
                </MenuItem>

                <MenuItem value="Result">
                    Result
                </MenuItem>

                <MenuItem value="Placement">
                    Placement
                </MenuItem>
            </Select>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                }}
            >
                {filteredNotifications.map(
                    (item: any, index: number) => (
                        <Card
                            onClick={() => {
                                if (!viewed.includes(item.ID)) {
                                    setViewed([
                                        ...viewed,
                                        item.ID,
                                    ]);
                                }
                            }}
                            key={item.ID}
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
                    )
                )}
            </div>
        </div>
    );
}

export default Notifications;