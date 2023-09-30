import { TimestampProvider } from "./TimestampProvider";

export class TimestampProviderMock implements TimestampProvider {
    private timestampNow: number | undefined = undefined;

    public getTimestamp(): number {
        if (!this.timestampNow) return Date.now();
        else return this.timestampNow;
    }

    public setTimestampSeconds(timestampSeconds: number) {
        this.timestampNow = timestampSeconds * 1000;
    }
}
