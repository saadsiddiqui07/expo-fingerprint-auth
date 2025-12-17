package expo.modules.fingerprintauth

import android.content.Context
import android.graphics.Color
import android.view.Gravity
import android.widget.TextView
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

class ExpoFingerprintAuthView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  internal val textView = TextView(context).apply {
    layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
    text = "Hello World"
    gravity = Gravity.CENTER
    textSize = 20f
    setTextColor(Color.BLACK)
  }

  init {
    addView(textView)
  }
}
