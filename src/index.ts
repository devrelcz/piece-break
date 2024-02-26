
    import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
    import { breakAction } from "./lib/actions/break";

    export const breakPiece = createPiece({
      displayName: "Break",
      auth: PieceAuth.None(),
      minimumSupportedRelease: '0.20.0',
      logoUrl: "https://cdn.activepieces.com/pieces/break.png",
      authors: [
        '@devrelcz'
      ],
      actions: [
        breakAction
      ],
      triggers: [],
    });
